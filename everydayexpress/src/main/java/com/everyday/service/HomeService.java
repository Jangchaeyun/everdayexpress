package com.everyday.service;

import com.everyday.modal.Home;
import com.everyday.modal.HomeCategory;

import java.util.List;

public interface HomeService {
    public Home createHomePageData(List<HomeCategory> allCategories);

}
