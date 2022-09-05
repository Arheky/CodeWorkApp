import React from 'react';
import {View, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import styles from './FavoriteJobs.style';
import Button from '../../components/Button/Button';

const FavoriteJobs = ({navigation}) => {
    const job = useSelector(s => s.favoriteJob);
    const dispatch = useDispatch();

    const handleRemoveFav = item => {
        dispatch({type: 'REMOVE_FAV', payload: {job: item}});
    }

    const renderFavJob = ({item}) => {
        return(
            <View style={styles.container}>
                <JobCard job={item} />
                <View style={styles.button_container}>
                    <Button
                     text="Remove"
                     onPress={() => handleRemoveFav(item)}
                    />
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList data={job} renderItem={renderFavJob} />
        </View>
    )
}

export default FavoriteJobs;