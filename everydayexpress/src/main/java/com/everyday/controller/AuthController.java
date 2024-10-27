package com.everyday.controller;

import com.everyday.domain.USER_ROLE;
import com.everyday.modal.User;
import com.everyday.repository.UserRepository;
import com.everyday.response.AuthResponse;
import com.everyday.response.SignupRequest;
import com.everyday.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req) {
       String jwt = authService.createUser(req);

       AuthResponse res = new AuthResponse();
       res.setJwt(jwt);
       res.setMessage("register success");
       res.setRole(USER_ROLE.ROLE_CUSTOMER);

        return ResponseEntity.ok(res);
    }
}
