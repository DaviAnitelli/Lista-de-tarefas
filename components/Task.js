import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Task(props){
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.box}>
                
                </TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.icon}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#00FF7F',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    box: {
        width: 24,
        height: 24,
        backgroundColor: '#32CD32',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        maxWidth: '80%',
    },
    icon: {
        width: 12,
        height: 12,
        borderColor: '#006400',
        borderWidth: 2,
        borderRadius: 5,
    }
});