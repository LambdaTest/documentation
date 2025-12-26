// Brand name configuration functions
// Change the values in these functions to set your brand name

function getBrandName() {
  // Change this value to set your brand name
  return 'TestMu AI';
}

function getBrandNameLowercase() {
  // Change this value to set your lowercase brand name
  return 'testmu ai';
}

function getBrandUrl() {
  // Change this value to set your brand URL
  return 'https://stage.testmuinternal.ai';
}

// Export constants for use in href attributes and other places
export const BRAND_NAME = getBrandName();
export const BRAND_NAME_LOWERCASE = getBrandNameLowercase();
export const BRAND_URL = getBrandUrl();

/**
 * Component to display the brand name
 * Usage: <BrandName /> or <BrandName case="lowercase" />
 */
export default function BrandName({ case: caseType = 'default' }) {
  if (caseType === 'lowercase') {
    return getBrandNameLowercase();
  }
  return getBrandName();
}


