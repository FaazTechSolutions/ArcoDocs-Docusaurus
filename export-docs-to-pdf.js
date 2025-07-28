const MarkdownIt = require('markdown-it');
const markdown = new MarkdownIt();
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const docsDir = path.join(__dirname, 'my-website', 'docs'); // Adjust this if your docs folder is elsewhere
const tempMarkdown = path.join(__dirname, 'combined-docs.md');
const tempHtml = path.join(__dirname, 'combined-docs.html');
const outputPdf = path.join(__dirname, 'docusaurus-docs.pdf');

function getMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getMarkdownFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function combineMarkdownFiles(files) {
  let combined = '';

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    combined += `\n\n---\n\n# ${path.basename(file)}\n\n${content}`;
  });

  fs.writeFileSync(tempMarkdown, combined, 'utf8');
  console.log(`✅ Combined ${files.length} markdown files into: ${tempMarkdown}`);
}

function generateHtml(mdFile, htmlFile) {
  const mdContent = fs.readFileSync(mdFile, 'utf8');
  const htmlContent = markdown.render(mdContent);
  fs.writeFileSync(htmlFile, htmlContent, 'utf8');
  console.log(`✅ Converted markdown to HTML: ${htmlFile}`);
}

function generatePdf() {
  generateHtml(tempMarkdown, tempHtml);
  try {
    execSync(`wkhtmltopdf "${tempHtml}" "${outputPdf}"`, { stdio: 'inherit' });
    console.log(`🎉 PDF generated: ${outputPdf}`);
  } catch (err) {
    console.error('❌ Failed to generate PDF:', err.message);
  }
}

function cleanUp() {
  if (fs.existsSync(tempMarkdown)) fs.unlinkSync(tempMarkdown);
  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
}

console.log('Starting export process...');

const mdFiles = getMarkdownFiles(docsDir);
combineMarkdownFiles(mdFiles);
generatePdf();
cleanUp();

console.log('Export complete.');
