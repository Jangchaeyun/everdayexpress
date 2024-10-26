package com.everyday.service.impl;

import com.everyday.domain.USER_ROLE;
import com.everyday.modal.User;
import com.everyday.repository.UserRepository;
import com.everyday.response.SignupRequest;
import com.everyday.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public String createUser(SignupRequest req) {
        User user = userRepository.findByEmail(req.getEmail());

        if (user == null) {
            User createdUser = new User();
            createdUser.setEmail(req.getEmail());
            createdUser.setFullName(req.getFullName());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile("8964765423");
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));

            user = userRepository.save(createdUser);
        }
        return "";
    }
}
