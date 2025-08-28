import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  Button,
  FlatList,
  Alert,
  SafeAreaView,
} from "react-native";

const LuxuryUIShowcase = () => {
  // Modal states
  const [gucciModalVisible, setGucciModalVisible] = useState(false);
  const [lvModalVisible, setLvModalVisible] = useState(false);

  // Luxury brand data with PNG images (Web-friendly)
  const brandList = [
    {
      id: "1",
      title: "Gucci",
      image:
        "https://1000logos.net/wp-content/uploads/2017/04/Gucci-Logo-500x281.png",
    },
    {
      id: "2",
      title: "Louis Vuitton",
      image:
        "https://1000logos.net/wp-content/uploads/2017/05/Louis-Vuitton-Logo-500x281.png",
    },
    {
      id: "3",
      title: "Chanel",
      image:
        "https://1000logos.net/wp-content/uploads/2017/05/Chanel-Logo-500x281.png",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>💎 Luxury Brand UI Showcase 💎</Text>

      {/* TouchableOpacity Example */}
      <Text style={styles.label}>
        TouchableOpacity: A luxury “Add to Wishlist” button.
      </Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setGucciModalVisible(true)}
      >
        <Text style={styles.buttonText}>✨ Add Gucci Bag to Wishlist ✨</Text>
      </TouchableOpacity>

      {/* Gucci Wishlist Modal */}
      <Modal visible={gucciModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              🎉 Gucci Bag added to your wishlist! 🎉
            </Text>
            <Button
              title="Close"
              color="#d4af37"
              onPress={() => setGucciModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

      {/* Modal Example */}
      <Text style={styles.label}>
        Modal: Luxury popup for Louis Vuitton.
      </Text>
      <Button
        title="Open Louis Vuitton Popup"
        color="#d4af37"
        onPress={() => setLvModalVisible(true)}
      />
      <Modal visible={lvModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              👜 Welcome to Louis Vuitton’s Exclusive Collection 👜
            </Text>
            <Button
              title="Close"
              color="#d4af37"
              onPress={() => setLvModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

      {/* Image Example */}
      <Text style={styles.label}>
        Image: Here’s the iconic Chanel logo.
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://1000logos.net/wp-content/uploads/2017/05/Chanel-Logo-500x281.png",
        }}
      />

      {/* Button Example */}
      <Text style={styles.label}>
        Button: Pretend it books a Rolex VIP appointment.
      </Text>
      <Button
        title="Book Rolex Appointment"
        color="#d4af37"
        onPress={() =>
          Alert.alert("Rolex", "Your Rolex VIP appointment is booked ⌚")
        }
      />

      {/* FlatList Example */}
      <Text style={styles.label}>
        FlatList: A showcase of 3 iconic luxury brands.
      </Text>
      <FlatList
        data={brandList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Image source={{ uri: item.image }} style={styles.listImage} />
            <Text style={styles.listItem}>• {item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default LuxuryUIShowcase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "500",
    color: "#444",
  },
  touchable: {
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#f0c05a", // Gold tone
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    width: 180,
    height: 100,
    resizeMode: "contain",
    marginVertical: 10,
    alignSelf: "center",
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  listImage: {
    width: 80,
    height: 50,
    resizeMode: "contain",
    marginRight: 12,
  },
  listItem: {
    fontSize: 16,
    color: "#222",
    fontWeight: "600",
  },
});

