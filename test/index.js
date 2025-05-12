/**
 * Basic tests for @profullstack/enhanced-router
 */

import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('@profullstack/enhanced-router', function() {
  it('should have a package.json file', function() {
    const pkgPath = path.join(__dirname, '../package.json');
    expect(fs.existsSync(pkgPath)).to.be.true;
    
    const pkgContent = fs.readFileSync(pkgPath, 'utf8');
    const pkg = JSON.parse(pkgContent);
    expect(pkg).to.be.an('object');
    expect(pkg.name).to.equal('@profullstack/enhanced-router');
  });
  
  it('should have a src directory', function() {
    const srcDir = path.join(__dirname, '../src');
    expect(fs.existsSync(srcDir)).to.be.true;
  });
});