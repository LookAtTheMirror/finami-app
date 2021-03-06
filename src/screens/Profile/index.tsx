import React, {FC, useCallback} from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'
import {useTheme} from 'providers'
import {ProfileInfo} from './elements'
import {useSelector} from 'react-redux'
import {Props} from './interface'
import {useFocusEffect, useRoute} from '@react-navigation/native'

const Profile: FC<Props> = ({navigation}) => {
  const route = useRoute()
  const {colors} = useTheme()

  const {
    currency: {items: currencies = []},
  } = useSelector((state: any) => state)

  useFocusEffect(
    useCallback(() => {
      navigation.closeDrawer()
    }, [route.name]),
  )

  const navigateToCurrency = (id: any) => {
    navigation.navigate('currencyInfo', {id})
  }

  return (
    <View style={[styles.root, {backgroundColor: colors.background}]}>
      <ProfileInfo navigation={navigation} />
      <View style={styles.profileMain}>
        {currencies.map((currency: any, index: number) => {
          const {width, height} = Image.resolveAssetSource(currency.image)
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigateToCurrency(currency.id)}>
              <Image
                source={currency.image}
                width={width / 10}
                height={height / 10}
                style={{width: width / 10, height: height / 10}}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default Profile
