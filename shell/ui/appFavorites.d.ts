import Shell from 'gi://Shell';

import * as ParentalControlsManager from '../misc/parentalControlsManager.js';
import * as Signals from '../misc/signals.js';

class AppFavorites extends Signals.EventEmitter {
    _favorites: {[app_id: string]: Shell.App};
    _parentalControlsManager: ParentalControlsManager;

    _onFavsChanged(): void;

    reload(): void;

    _getIds(): string[];

    getFavoriteMap(): {[app_id: string]: Shell.App};

    getFavorites(): Shell.App[];

    isFavorite(appId: string): boolean;

    _addFavorite(appId: string, pos: number): boolean;

    addFavoriteAtPos(appId: string, pos: number): void;

    addFavorite(appId: string): void;

    moveFavoriteToPos(appId: string, pos: number): void;

    _removeFavorite(appId: string): boolean;

    removeFavorite(appId: string): void;
}

export function getAppFavorites(): AppFavorites {
    if (appFavoritesInstance == null) {
        appFavoritesInstance = new AppFavorites();
    }

    return appFavoritesInstance;
}
