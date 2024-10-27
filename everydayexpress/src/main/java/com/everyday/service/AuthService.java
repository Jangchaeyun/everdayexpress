package com.everyday.service;

import com.everyday.request.LoginRequest;
import com.everyday.response.AuthResponse;
import com.everyday.response.SignupRequest;

public interface AuthService {
    void sentLoginOtp(String email) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req);
}
