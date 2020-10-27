<template>
<v-app id="inspire">
    <v-app-bar id="navbar" app>
        <v-btn @click="home()" text id="nav-btn">
            SHAWPEE
        </v-btn>
        <v-tab v-for="datas in categories" :key="datas.id">{{
                datas.Name
            }}</v-tab>

        <div class="admin" v-if="admin == true">
            <v-btn to="/home" text id="nav-btn">
                Home
            </v-btn>
            <v-btn text id="nav-btn">
                Messages
            </v-btn>
            <v-btn text id="nav-btn">
                Profile
            </v-btn>
            <v-btn text id="nav-btn">
                Updates
            </v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-btn v-if="admin == true" @click="logout()" text id="nav-btn" v-bind="attrs" v-on="on">
            Logout
        </v-btn>
        <v-dialog v-if="admin == false" v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text id="nav-btn" v-bind="attrs" v-on="on">
                    Login
                </v-btn>
            </template>
        </v-dialog>
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>

    <!--------- LOGIN DIALOG ------->

    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <form @submit.prevent="login()">
                    <v-card-title>
                        <span class="headline">Login</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Username*" @keydown="clear()" v-model="username" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" @keydown="clear()" v-model="password" type="text" required></v-text-field>
                                </v-col>
                                <medium style="color:red; margin: auto">{{
                                        error
                                    }}</medium>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text type="submit">
                            Login
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</v-app>
</template>

<script>
export default {
    data: () => ({
        links: ["Dashboard", "Messages", "Profile", "Updates"],
        admin: false,
        dialog: false,
        username: "",
        password: "",
        error: "",
        categories: []
    }),
    methods: {
        home() {
            if (this.admin == false) {
                this.$router.push("/home");
            } else if (admin == true) {
                this.$router.push("/adminhome");
            }
        },
        login() {
            if (this.username == "admin" && this.password == "admin") {
                this.admin = true;
                this.$router.push("/adminhome");
                this.dialog = false;
            } else {
                this.error = "Incorrect username or password";
            }
        },
        clear() {
            this.error = "";
        },
        logout() {
            this.admin = false;
            this.$router.push("/home");
        }
    },
    created() {
        this.home();
    }
};
</script>
