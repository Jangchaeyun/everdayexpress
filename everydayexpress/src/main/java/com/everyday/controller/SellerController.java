package com.everyday.controller;

import com.everyday.modal.VerificationCode;
import com.everyday.repository.VerificationCodeRepository;
import com.everyday.request.LoginRequest;
import com.everyday.response.ApiResponse;
import com.everyday.response.AuthResponse;
import com.everyday.service.AuthService;
import com.everyday.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {
    private final SellerService sellerService;
    private final VerificationCodeRepository verificationCodeRepository;
    private final AuthService authService;


//    @PostMapping("/sent/login-otp")
//    public ResponseEntity<ApiResponse> sentOtpHandler(
//            @RequestBody VerificationCode req
//    ) throws Exception {
//        authService.sentLoginOtp(req.getEmail());
//
//        ApiResponse res = new ApiResponse();
//
//        res.setMessage("otp sent successfully");
//
//        return ResponseEntity.ok(res);
//    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller(
            @RequestBody LoginRequest req
            ) throws Exception {
        String otp = req.getOtp();
        String email = req.getEmail();

//        VerificationCode verificationCode = verificationCodeRepository.findByEmail(email);
//        if (verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())) {
//            throw new Exception("wrong otp...");
//        }

        req.setEmail("seller_" + email);
        AuthResponse authResponse = authService.signing(req);


        return ResponseEntity.ok(authResponse);
    }
}
