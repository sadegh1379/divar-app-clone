import React , {useState , useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { HeaderBar } from '../components'

const Details = ({navigation , route}) => {

    const [selectedItem , setSelectedItem] = useState(null)
    useEffect(()=>{
        const {product} = route.params;
        setSelectedItem(product)
    },[])
    return (
        <View 
            style={{
                paddingTop : 60
            }}
        >
            <HeaderBar
                showBookMark={true}
                bookMarkOnPress={()=>console.log('bookmark')}
                showDetails={true}
                DetailsOnPress={()=>console.log('details')}
                navigation={navigation}
            />
            <ScrollView>
              <Text>details screen {selectedItem?.name}</Text>
            </ScrollView>
        </View>
    )
}

export default Details
