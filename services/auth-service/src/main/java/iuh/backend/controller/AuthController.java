package iuh.backend.controller;

import iuh.backend.dto.AuthResponse;
import iuh.backend.dto.LoginRequest;
import iuh.backend.entity.User;
import iuh.backend.repository.UserRepository;
import iuh.backend.service.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Cho phép React Native gọi tới
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // 1. Kiểm tra username/password (nên dùng BCrypt)
        User user = userRepository.findByUsername(request.getUsername()).orElse(null);
        
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
        
        // 2. Nếu khớp, tạo JWT Token chứa Role
        String token = jwtService.generateToken(user); // Chứa các claims như role: "WAITER"
        
        // 3. Trả về cho Frontend
        return ResponseEntity.ok(new AuthResponse(token, user.getRole()));
    }

}