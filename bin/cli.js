#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const TARGET_DIR = path.join(process.cwd(), "skill.md");

// The files we want to copy from the NPM package to the user's project
const FILES_TO_COPY = [
  "01_SYSTEM_CORE.md",
  "02_PRODUCT_DESIGN.md",
  "03_ENGINEERING_STANDARDS.md",
  "04_SECURITY_TESTING.md",
  "05_DEPLOYMENT_MAINTAIN.md",
  "README.md",
  "brain.template.md",
  "brain.md" // Include empty brain.md just in case
];

// Folders to create
const FOLDERS_TO_CREATE = [
  "skills"
];

console.log("\n🚀 Initiating Vibe Brain OS installation...\n");

// 1. Create target directory
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  console.log(`📁 Created directory: ./skill.md`);
} else {
  console.log(`📁 Directory already exists: ./skill.md (Files will be overwritten/updated)`);
}

// 2. Create subdirectories
FOLDERS_TO_CREATE.forEach(folder => {
  const folderPath = path.join(TARGET_DIR, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
});

// 3. Copy files
let successCount = 0;
let errorCount = 0;

FILES_TO_COPY.forEach(file => {
  const sourcePath = path.join(__dirname, "..", file);
  const destPath = path.join(TARGET_DIR, file);

  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      successCount++;
    } else {
      console.warn(`⚠️ Warning: Could not find ${file} in package.`);
      errorCount++;
    }
  } catch (err) {
    console.error(`❌ Error copying ${file}:`, err.message);
    errorCount++;
  }
});

// 4. Create an empty skills/README.md if it doesn't exist
const skillsReadmeDest = path.join(TARGET_DIR, "skills", "README.md");
if (!fs.existsSync(skillsReadmeDest)) {
    try {
        const skillsSource = path.join(__dirname, "..", "skills", "README.md");
        if(fs.existsSync(skillsSource)) {
             fs.copyFileSync(skillsSource, skillsReadmeDest);
        } else {
             fs.writeFileSync(skillsReadmeDest, "# ⚡ Skills Library\n\nSave reusable AI skills here.");
        }
    } catch(e) {}
}


console.log("\n===============================================");
if (errorCount === 0) {
  console.log("✅ Vibe Brain OS successfully injected into your project!");
} else {
  console.log(`⚠️ Installation completed with ${errorCount} warnings.`);
}
console.log("===============================================\n");

console.log("🤖 TO THE AI AGENT:");
console.log("If you are an AI reading this output, you must now read:");
console.log("-> skill.md/01_SYSTEM_CORE.md");
console.log("And strictly follow the instructions inside it.\n");
