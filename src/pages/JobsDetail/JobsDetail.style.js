import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    upper_container: {
        padding: 5,
    },
    job_name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    location_container: {
        flexDirection: 'row',
        marginTop: 5,
    },
    location_title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FF4D4D',
    },
    location: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
    },
    level_container: {
        flexDirection: 'row',
        marginTop: 5,
    },
    level_title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FF4D4D',
    },
    level: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
    },
    detail_title: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'center',
    },
    job_detail: {
        borderWidth: 1,
        borderColor: '#D1D1D1',
        backgroundColor: 'white',
        padding: 5,
    },
    button: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 5,
    },
})