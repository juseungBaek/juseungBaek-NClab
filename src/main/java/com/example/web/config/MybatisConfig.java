package com.example.web.config;

import javax.sql.DataSource;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import lombok.RequiredArgsConstructor;

@Configuration
@Lazy
@RequiredArgsConstructor
@MapperScan(basePackages="com.example.web.dao", sqlSessionFactoryRef = "sqlSessionFactory",annotationClass = Mapper.class)
public class MybatisConfig {


    private final ApplicationContext context;

    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {

        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();

        sessionFactory.setDataSource(dataSource);

        sessionFactory.setMapperLocations(
        context.getResources( // 1
                // 실제 쿼리가 들어갈 xml 패키지 경로
                "classpath:/mapper/*.xml"
        ));
        // Value Object를 선언해 놓은 package 경로
        // Mapper의 result, parameterType의 패키지 경로를 클래스만 작성 할 수 있도록 도와줌.
        sessionFactory.setTypeAliasesPackage( "com.example.web.dto" );
        return sessionFactory.getObject();
    }

    // Mybatis Template
    @Bean
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) throws Exception {
        SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory);
        
        sqlSessionTemplate.getConfiguration().setMapUnderscoreToCamelCase(true);
        
//        sqlSessionTemplate.getConfiguration().setUseGeneratedKeys(true);
        return sqlSessionTemplate;
    }

    @Bean
    public DataSourceTransactionManager transactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
}