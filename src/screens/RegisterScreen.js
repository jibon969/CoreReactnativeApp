import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native'

const RegisterScreen = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.textMessage}>
                    {/*<Text style={{textAlign: "center", margin: 10}}>*/}
                        {/*<SimpleLineIcons name="user" size={70} color="#007036"/>*/}
                    {/*</Text>*/}
                    <Text style={styles.register}>
                        Register your account
                    </Text>
                </View>
                <View style={styles.contactUsForm}>
                    <View style={{marginTop: 9}}/>
                    <TextInput
                        placeholder="First Name *"
                        style={styles.input}
                        selectionColor="#183153"
                    />

                    <TextInput
                        placeholder="Last name *"
                        style={styles.input}
                        selectionColor="#183153"
                    />
                    <TextInput
                        placeholder="Contact Number *"
                        keyboardType="numeric"
                        style={styles.input}
                        selectionColor="#183153"
                    />
                    <TextInput
                        placeholder="E-mail *"
                        style={styles.input}
                        selectionColor="#183153"
                    />
                    <TextInput
                        placeholder="Enter your password *"
                        style={styles.input}
                        selectionColor="#183153"
                    />
                    <View style={styles.styleLoginBtn}>
                        <Text style={styles.loginText}>I have already an account </Text>
                        <TouchableOpacity>
                            <Text style={styles.signInBtn}>Sign in</Text>
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
        color: "#007036",
        padding: 10
    },
    textMessage: {
        margin: 1
    },

    register: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        margin: 10,
        color: "#007036"
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
    }

});

export default RegisterScreen;