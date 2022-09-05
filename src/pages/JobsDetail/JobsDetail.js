import React, {useState} from 'react';
import {View, Text, ScrollView, Alert, useWindowDimensions} from 'react-native';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';
import { useDispatch } from 'react-redux';

import useFetch from '../../hooks/useFetch/useFetch';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import styles from './JobsDetail.style';

const JobsDetail = ({route}) => {
    const {id} = route.params;
    const {data, loading, error} = useFetch(`${Config.API_URL}/${id}`);
    const dispatch = useDispatch();

    const handleFavJob = favoriteJob => {
        dispatch({type: 'ADD_FAV_LIST', payload: {favoriteJob}});
        Alert.alert('Favorited', 'Added to favorites')
    };
    const {width} = useWindowDimensions();
    const source = {
        html: `${data.contents}`,
    };

    const handleSubmit = () => {
        Alert.alert('Submitted', 'Your application has been successfully received!');
    }

    if (loading) {
        <Loading />
    }

    if(error) {
        <Error />
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.upper_container}>
                <Text style={styles.job_name}>{data.name}</Text>
                <View style={styles.location_container}>
                    <Text style={styles.location_title}>Locations: </Text>
                    <Text style={styles.location}>
                        {data.location && data.location.length > 0
                         ? data.location[0].name
                         : 'Unknown Location'}
                    </Text>
                </View>
                <View style={styles.level_container}>
                    <Text style={styles.level_title}>Job Level: </Text>
                    <Text style={styles.level}>
                        {data.levels && data.levels.length > 0
                         ? data.levels[0].short_name
                         : 'Unknown Level'}
                    </Text>
                </View>
                <Text style={styles.detail_title}>Job Detail</Text>
            </View>
            <View style={styles.job_detail}>
                <RenderHTML source={source} contentWidth={width} />
            </View>
            <View style={styles.button}>
                <Button
                 icon="login"
                 text="Submit"
                 onPress={handleSubmit}
                />
                <Button
                 icon="favorite"
                 text="Favorite Job"
                 onPress={() => handleFavJob(data)}
                />
            </View>
        </ScrollView>
    )
}

export default JobsDetail;