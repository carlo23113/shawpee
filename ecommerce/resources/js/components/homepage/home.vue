<template>
<v-app>
    <v-card id="tabs">
        <v-tabs>
            <v-tab>One</v-tab>
            <v-tab>Two</v-tab>
            <v-tab>Three</v-tab>
            <v-tab v-for="datas in categories" :key="datas.id">{{
                    datas.Name
                }}</v-tab>
        </v-tabs>
    </v-card>
    <div class="container1">
        <div class="text-center" id="pag">
            <v-pagination v-model="page" color="#282d32" :length="3" circle></v-pagination>
            <div id="search">
                <v-text-field label="Solo" placeholder="Search a product" solo></v-text-field>
                <v-btn style="margin-top: 5px; color: white;" color="#282d32" large>
                    <svg id="search-btn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </v-btn>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-badge :content="product" :value="product" color="green" overlap>
                            <svg v-bind="attrs" v-on="on" id="cart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                            </svg>
                        </v-badge>
                    </template>
                </v-dialog>
            </div>
        </div>
        <div class="products">
            <v-card class="mx-auto" max-width="200">
                <v-img src="./images/iphone.jpg" height="180px"></v-img>

                <v-card-title>
                    iPhone 12 Pro
                </v-card-title>

                <v-card-subtitle>
                    ₱58,000.00
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="#282d32 lighten-2" @click="product++" text>
                        Add to cart
                    </v-btn>

                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </div>

        <!--------- CART ------->
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar dark color="#282d32">
                        <v-btn icon dark @click="dialog = false">
                            <svg id="close" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                            </svg>
                        </v-btn>
                        <v-toolbar-title>Your Cart</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text @click="dialog = false">
                                Checkout
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-subheader>User Controls</v-subheader>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Content filtering</v-list-item-title>
                                <v-list-item-subtitle>Set the content filtering level to
                                    restrict apps that can be
                                    downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Password</v-list-item-title>
                                <v-list-item-subtitle>Require password for purchase or use
                                    password to restrict
                                    purchase</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</v-app>
</template>

<script>
import gql from "graphql-tag";
export default {
    data: () => ({
        page: 1,
        dialog: false,
        product: 0,
        show: false,

        categories: []
    }),
    apollo: {
        categories: gql `
            {
                categories {
                    id
                    Name
                }
            }
        `
    },
    methods: {},
    created() {}
};
</script>
