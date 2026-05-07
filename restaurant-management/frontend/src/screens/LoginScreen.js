import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Thay '10.0.2.2' bằng IP máy tính của bạn nếu dùng máy ảo Android
      // Hoặc 'localhost' nếu chạy web
      const response = await axios.post('http://10.0.2.2:8080/api/auth/login', {
        username: username,
        password: password
      });

      if (response.data.status === 'success') {
        const { role } = response.data;
        
        // Lưu role lại để dùng cho các chức năng khác
        await AsyncStorage.setItem('userRole', role);

        // Điều hướng dựa trên Role trong Database của bạn
        if (role === 'MANAGER') {
          navigation.navigate('ManagerStack');
        } else if (role === 'STAFF') {
          navigation.navigate('StaffStack');
        } else {
          navigation.navigate('CustomerStack');
        }
      }
    } catch (error) {
      Alert.alert("Lỗi", "Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NHÀ HÀNG HOVII</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#ff4500' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: '#ff4500', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

export default LoginScreen;