<template>
<v-app>
    <v-card id="tabs">
        <v-tabs>
            <v-tab>One</v-tab>
            <v-tab>Two</v-tab>
            <v-tab>Three</v-tab>
            <v-tab>Four</v-tab>
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
                    <v-btn color="#282d32 lighten-2" text>
                        Edit
                    </v-btn>
                    <v-btn color="#282d32 lighten-2" text>
                        Delete
                    </v-btn>

                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </div>

        <div class="add">
            <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition">
                <template v-slot:activator>
                    <v-btn v-model="fab" color="blue darken-2" dark fab>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                    </v-btn>
                </template>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn fab dark small color="green" v-bind="attrs" v-on="on">
                            P
                        </v-btn>
                    </template>
                </v-dialog>
                <v-dialog v-model="dialog1" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn fab dark small color="indigo" v-bind="attrs" v-on="on">
                            C
                        </v-btn>
                    </template>
                </v-dialog>
            </v-speed-dial>
        </div>

        <!--------- ADD PRODUCT DIALOG ------->
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Add Product</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Product Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Product Description*" type="text" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Price (₱)*" type="number*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="items" label="Product Category*"></v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <!--------- ADD PRODUCT CATEGORY ------->
        <v-row justify="center">
            <v-dialog v-model="dialog1" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Add Product Category</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Product Category Name*" required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog1 = false">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="dialog1 = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</v-app>
</template>

<script>
export default {
    data: () => ({
        page: 1,
        direction: "top",
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: "slide-y-reverse-transition",
        dialog: false,
        dialog1: false
    }),
    methods: {},
    computed: {
        activeFab() {
            switch (this.tabs) {
                case "one":
                    return {
                        class: "purple",
                            icon: "account_circle"
                    };
                case "two":
                    return {
                        class: "red",
                            icon: "edit"
                    };
                case "three":
                    return {
                        class: "green",
                            icon: "keyboard_arrow_up"
                    };
                default:
                    return {};
            }
        }
    },

    watch: {
        top(val) {
            this.bottom = !val;
        },
        right(val) {
            this.left = !val;
        },
        bottom(val) {
            this.top = !val;
        },
        left(val) {
            this.right = !val;
        }
    }
};
</script>
