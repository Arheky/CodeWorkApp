import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import JobCard from '../../components/JobCard/JobCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import styles from './Jobs.style';

const Jobs = ({navigation}) => {
    const [page, setPage] = useState(1);
    const {data, loading, error} = useFetch(`${Config.API_URL}?page=${page}`);

    if (loading) {
        <Loading />;
    }
    if (error) {
        <Error />;
    }

    const handleSelect = id => {
        navigation.navigate('JobsDetailPage', {id});
    }

    const renderJobs = ({item}) => (
        <JobCard job={item} onSelect={() => handleSelect(item.id)} />
    );


    return (
        <View style={styles.container}>
            <FlatList data={data.results} renderItem={renderJobs} />
            <View style={styles.button_container}> 
            </View>
        </View>
    )
}

export default Jobs;