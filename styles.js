import { StyleSheet } from "react-native";

// PROTOTYPE STYLINGS

export const styles = StyleSheet.create({
  // ===== Container & Layout =====
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  screenPadding: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  spacedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // ===== Text Styles =====
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },
  bodyText: {
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    fontSize: 14,
    color: "red",
    marginTop: 5,
  },
  successText: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },
  fadedText: {
    fontSize: 14,
    color: "gray",
  },

  // ===== Buttons =====
  button: {
    backgroundColor: "#fefefe",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonSecondary: {
    backgroundColor: "#6c757d",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  // ===== Inputs =====
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  inputError: {
    borderColor: "red",
  },
  lineInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#9c9c9c",
    paddingVertical: 8,
    fontSize: 30,
    color: "#ffffff",
  },

  // ===== Cards / Lists =====
  addTripCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#20286b",
    borderWidth: 5,
    padding: 15,
    marginVertical: 8,
    elevation: 3,
  },
  card: {
    backgroundColor: "gray",
    borderRadius: 12,
    borderColor: "#20286b",
    borderWidth: 3,
    padding: 15,
    marginVertical: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  circle: {
    borderRadius: 40,
    height: 40,
    width: 40,
  },
  selectedCircle: {
    borderRadius: 40,
    height: 40,
    width: 40,
    outlineWidth: 5,
    outlineColor: "#888888",
  },

  // ===== Modal Styles =====
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  modalHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalCloseButton: {
    position: "absolute",
    top: 15,
    right: 15,
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Dimmed background
    justifyContent: "flex-end", // Pushes content to bottom
  },
  modalContent: {
    backgroundColor: "#3d3d3d",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10, // Creates gap at the top
    minHeight: "90%", // Optional: height of the modal
  },

  // ===== Spacing Helpers =====
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  mb10: { marginBottom: 10 },
  mb20: { marginBottom: 20 },
  p10: { padding: 10 },
  p20: { padding: 20 },
});
