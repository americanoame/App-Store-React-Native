import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

const Main = () => {
    return (
        <View style={{ paddingVertical: Platform.OS == 'android' ? statusbar.currentHeight : 0 }}>
            <SafeAreaView>
                <Text>Main</Text>
            </SafeAreaView>
        </View>
    );
};

export default Main