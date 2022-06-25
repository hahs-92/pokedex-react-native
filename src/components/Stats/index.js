import { StyleSheet, View, Text } from 'react-native'
//utils
import { getColorByPokemonType } from '../../utils/getColorType';
export default function Stats({stats, type }) {
    const maxStats = [255, 190, 230, 194, 230, 180];

    const barStyles = (index, baseStat) => {
        const percentageStat = (100 * baseStat) / maxStats[index];
        return {
        backgroundColor: getColorByPokemonType(type) ,
        width: `${percentageStat}%`,
        }
    };

    return (
        <View style={ styles.stats }>
            <Text style={ styles.title }>Base Stats:</Text>
            {
                stats?.map((stat, idx) => (
                    <View style={ styles.block }  key={ stat?.stat.name }>
                        <View style={ styles.blockTitle }>
                            <Text style={ styles.name }>{ stat?.stat.name }</Text>
                        </View>
                        <View style={ styles.blockInfo }>
                            {/* <Text style={ styles.number }>{ stat.base_stat }</Text> */}
                            <View style={ styles.barBg }>
                                <View style={ [styles.bar, barStyles(idx,stat.base_stat)] }></View>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    stats: {
        marginVertical: 40,
        paddingHorizontal: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    block: {
        flexDirection: "row",
        paddingVertical: 10,
    },
    blockTitle: {
        width: "30%"
    },
    name: {
        fontSize: 14,
        color: "#6b6b6b",
        textTransform: "capitalize"
    },
    blockInfo: {
        flexDirection: "row",
        alignItems: "center",
        width: "70%"
    },
    number: {
        fontSize: 12
    },
    barBg: {

        width: "100%",
        backgroundColor: "#dedede",
        height: 6,
        borderRadius: 20
    },
    bar: {
        height:"100%",
        borderRadius: 20,
    }
})