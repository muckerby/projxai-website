export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '';
export const ALGOLIA_INDEX_NAME_SUFFIX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'default';
export const ALGOLIA_SEARCH_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '';

export const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY || '';
// Environment name for index management
export const ENV_NAME = process.env.NODE_ENV || 'development';

export function buildIndexName() {
    const indexName = ENV_NAME + '_' + ALGOLIA_INDEX_NAME_SUFFIX;
    return indexName;
}

// Helper function to check if Algolia is properly configured
export function isAlgoliaConfigured() {
    return !!(ALGOLIA_APP_ID && ALGOLIA_INDEX_NAME_SUFFIX && ALGOLIA_SEARCH_API_KEY);
}
