export const ALGOLIA_APP_ID: string = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '';
export const ALGOLIA_INDEX_NAME_SUFFIX: string = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'default';
export const ALGOLIA_SEARCH_API_KEY: string = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '';

export const ALGOLIA_ADMIN_API_KEY: string = process.env.ALGOLIA_ADMIN_API_KEY || '';
// Environment name for index management
export const ENV_NAME: string = process.env.NODE_ENV || 'development';

export function buildIndexName(): string {
    const indexName = ENV_NAME + '_' + ALGOLIA_INDEX_NAME_SUFFIX;
    return indexName;
}

// Helper function to check if Algolia is properly configured
export function isAlgoliaConfigured(): boolean {
    return !!(ALGOLIA_APP_ID && ALGOLIA_INDEX_NAME_SUFFIX && ALGOLIA_SEARCH_API_KEY);
}
