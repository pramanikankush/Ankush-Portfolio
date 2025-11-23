/**
 * Utility functions for image optimization
 */

/**
 * Generate a low-quality placeholder image URL
 */
export function getPlaceholderUrl(originalUrl: string, quality = 10): string {
    // For Unsplash images, we can use their API parameters
    if (originalUrl.includes('unsplash.com')) {
        const url = new URL(originalUrl);
        url.searchParams.set('w', '50');
        url.searchParams.set('q', quality.toString());
        url.searchParams.set('blur', '10');
        return url.toString();
    }

    return originalUrl;
}

/**
 * Preload an image
 */
export function preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * Progressive image loading component helper
 */
export class ImageLoader {
    private static cache = new Set<string>();

    static isLoaded(src: string): boolean {
        return this.cache.has(src);
    }

    static markAsLoaded(src: string): void {
        this.cache.add(src);
    }

    static async load(src: string): Promise<void> {
        if (this.isLoaded(src)) {
            return;
        }

        await preloadImage(src);
        this.markAsLoaded(src);
    }
}
