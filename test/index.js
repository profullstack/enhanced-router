/**
 * Basic tests for @profullstack/enhanced-router
 */

// Import the module
const router = require('../src/index.js');

// Basic test to ensure the module exports something
console.log('Testing @profullstack/enhanced-router...');
console.log('Module exports:', Object.keys(router));

if (Object.keys(router).length === 0) {
  console.error('ERROR: Module does not export anything!');
  process.exit(1);
}

// Test i18n if it exists
if (router.i18n) {
  console.log('Testing i18n functionality...');
  console.log('i18n exports:', Object.keys(router.i18n));
}

// Test layouts if it exists
if (router.layouts) {
  console.log('Testing layouts functionality...');
  console.log('layouts exports:', Object.keys(router.layouts));
}

// Test transitions if it exists
if (router.transitions) {
  console.log('Testing transitions functionality...');
  console.log('transitions exports:', Object.keys(router.transitions));
}

console.log('Basic test passed!');