import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.style';

const JobCard = ({job, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Text style={styles.job_title}>{job.name}</Text>
                    <Text style={styles.company_name}>{job.company.name}</Text>
                    <Text style={styles.company_location}>{job.locations[0].name}</Text>
                    <Text style={styles.level}>{job.levels[0].name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JobCard;