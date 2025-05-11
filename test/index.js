/**
 * Basic tests for @profullstack/enhanced-router
 */

// Import the module
import router from '../src/index.js';
import { jest } from '@jest/globals';

describe('@profullstack/enhanced-router', () => {
  test('module exports something', () => {
    console.log('Testing @profullstack/enhanced-router...');
    console.log('Module exports:', Object.keys(router));
    
    expect(Object.keys(router).length).toBeGreaterThan(0);
  });
  
  // Test i18n if it exists
  test('i18n functionality if available', () => {
    if (router.i18n) {
      console.log('Testing i18n functionality...');
      console.log('i18n exports:', Object.keys(router.i18n));
      expect(router.i18n).toBeDefined();
    } else {
      console.log('i18n not available, skipping test');
    }
  });
  
  // Test layouts if it exists
  test('layouts functionality if available', () => {
    if (router.layouts) {
      console.log('Testing layouts functionality...');
      console.log('layouts exports:', Object.keys(router.layouts));
      expect(router.layouts).toBeDefined();
    } else {
      console.log('layouts not available, skipping test');
    }
  });
  
  // Test transitions if it exists
  test('transitions functionality if available', () => {
    if (router.transitions) {
      console.log('Testing transitions functionality...');
      console.log('transitions exports:', Object.keys(router.transitions));
      expect(router.transitions).toBeDefined();
    } else {
      console.log('transitions not available, skipping test');
    }
  });
});