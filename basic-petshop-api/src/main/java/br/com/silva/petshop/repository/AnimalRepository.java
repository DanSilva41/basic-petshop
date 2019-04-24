package br.com.silva.petshop.repository;

import br.com.silva.petshop.domain.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * Spring Data JPA repository para a entidade Animal.
 *
 * @author Danilo Silva
 */
public interface AnimalRepository extends JpaRepository<Animal, Long>, JpaSpecificationExecutor<Animal> {
}
