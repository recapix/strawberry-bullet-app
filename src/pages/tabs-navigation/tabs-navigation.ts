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
    tab5Root: any;

    constructor() {
        this.tab1Root = HomePage;
        this.tab2Root = HomePage;
        this.tab3Root = SearchPage;
        this.tab4Root = ProfilePage;
        this.tab5Root = SettingsPage;
    }
}
