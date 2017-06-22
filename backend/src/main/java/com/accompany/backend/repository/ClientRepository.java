package com.accompany.backend.repository;

import com.accompany.backend.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by siphokazi on 2017/06/18.
 */

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findById(String id);
    Client findByClientEmail(String email);
}
