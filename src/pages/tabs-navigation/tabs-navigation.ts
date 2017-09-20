import { Component } from '@angular/core';

import { HomePage, ProfilePage, SearchPage, SettingsPage } from '../';

@Component({
    selector: 'tabs-navigation',
    templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
    tab1Root: any;
    tab2Root: any;
    tab3Root: any;
    tab4Root: any;

    constructor() {
        this.tab1Root = HomePage;
        this.tab2Root = SearchPage;
        this.tab3Root = ProfilePage;
        this.tab4Root = SettingsPage;
    }
}
