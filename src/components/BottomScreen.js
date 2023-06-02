


const BottomScreen = (time, location, isDay) => {
        return (
            <View style={styles.bottomRow}>
            {time ? <Text style={styles.text}>time works</Text> : null}
            {location ? <Text style={styles.text}>location works</Text> : null}
            {isDay ? <Text style={styles.text}>isDay works</Text> : null}
            </View>
        );

}



export default BottomScreen;
