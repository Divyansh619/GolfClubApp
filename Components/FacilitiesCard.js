import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

const FacilitiesCard=(props)=>{
return( <View>
<View>
<Text style={styles.headingText}>{props.name}</Text>
{/* {props.menu&&<Text style={styles.headingText}>{props.menu}</Text>} */}


</View>
<View style={styles.container}>
    {props.data && props.data.map((item,index) => {
        return (
            <View style={{ width: "33%", padding: 4 }} key={index}>
                <Image
                    source={{ uri: item }}
                    style={styles.image}
                />
            </View>
        )
    })
    }
</View>
</View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 14,
        paddingBottom: 10,
        width: "100%"
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: "gray"
    },
    headingText: {
        fontSize: 18,
        paddingHorizontal: 16,
        fontFamily: 'Roboto-Regular',
    }
});
export default FacilitiesCard;
