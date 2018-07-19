package com.mdekhtiarenko.appledepartment.repositories;

import com.mdekhtiarenko.appledepartment.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

}
