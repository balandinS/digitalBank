import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../UIKIt/Colors';
import {ScrollView} from 'react-native-gesture-handler';

const Link = ({linkName = '', screenName}) => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    if (screenName) {
      navigation.navigate(screenName);
    }
  };
  return (
    <TouchableOpacity style={styles.actionLinkbtn} onPress={handleOnPress}>
      <Text style={styles.actionLinkLabel}>{linkName}</Text>
    </TouchableOpacity>
  );
};
const ActionsList = ({actionList = [], actionTitle = 'actionTitle'}) => {
  const memorizeList = React.useMemo(() => {
    return actionList.map((link, index) => (
      <Link
        linkName={link.name}
        screenName={link.screen}
        key={`${link.screen} - ${index}`}
      />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.actionTitleContainer}>
        <Text style={styles.actionTitle}>{actionTitle}</Text>
      </View>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}>
        {memorizeList}
      </ScrollView>
    </View>
  );
};

export default ActionsList;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    marginTop: 32,
  },
  actionTitleContainer: {
    padding: 8,
    borderBottomColor: Colors.electric_violet,
    borderBottomWidth: 1,
    alignItems: 'flex-end',
  },
  actionTitle: {
    fontSize: 18,
    lineHeight: 28,
    color: Colors.black,
  },
  actionLinkbtn: {
    borderBottomColor: Colors.border_gray,
    borderBottomWidth: 1,
    alignItems: 'flex-end',
    marginTop: 24,
  },
  actionLinkLabel: {
    paddingBottom: 8,
    fontSize: 14,
    color: Colors.black,
  },
});
