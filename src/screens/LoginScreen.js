import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
} from 'react-native';


const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{flex: 1}}/>
            <ScrollView>
                <View style={styles.logoSection}>
                    <Image
                        source={require('../assets/logo/belaface-logo.png')}
                        style={styles.logoSize}
                    />
                </View>
                <View style={styles.contactUsForm}>
                    <TextInput
                        placeholder="Enter your E-mail"
                        style={styles.input}
                        selectionColor="#183153"
                    />

                    <TextInput
                        placeholder="Enter your password"
                        style={styles.input}
                        selectionColor="#183153"
                    />
                    <View style={styles.styleLoginBtn}>
                        <Text style={styles.loginText}>Don't have an account yet ?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signInBtn}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: "#FFF",
        color: "#000",
        padding: 10
    },

    logoSection: {
        justifyContent: "center",
        alignItems: "center",
    },
    logoSize: {
        width: 200,
        height: 200,
    },


    contactUsForm: {
        borderWidth: 1,
        borderColor: '#E9EBEC',
        borderRadius: 10,
        padding: 5,
    },
    input: {
        height: 45,
        margin: 8,
        padding: 10,
        borderRadius: 5,
        borderColor: "#E9EBEC",
        backgroundColor: "#E9EBEC",
    },
    styleRegisterBtn: {
        borderRadius: 10,
        padding: 10,
    },
    sendMessage: {
        padding: 10,
        backgroundColor: "#007036",
        textAlign: "center",
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#007036",
        color: "#FFF",
        overflow: "hidden"
    },
    styleLoginBtn: {
        margin: 20
    },
    loginText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        color: "#007036"
    },
    signInBtn: {
        marginTop: 10,
        padding: 5,
        backgroundColor: "#007036",
        textAlign: "center",
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#007036",
        color: "#FFF",
        overflow: "hidden",
        width: 100,
        alignSelf: "center"
    },

});

export default LoginScreen;