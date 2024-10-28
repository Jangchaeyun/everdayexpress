package com.everyday.service;

import com.everyday.domain.USER_ROLE;
import com.everyday.request.LoginRequest;
import com.everyday.response.AuthResponse;
import com.everyday.response.SignupRequest;

public interface AuthService {
    void sentLoginOtp(String email, USER_ROLE role) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req) throws Exception;
}
