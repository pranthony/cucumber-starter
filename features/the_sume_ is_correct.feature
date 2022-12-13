Feature: The sum is correct?
    Everybody wants to learn to add
    
    Scenario Outline: 5 is the result of 2 plus 3
        Given the result is <result>
        When ask the result of <num_1> plus <num_2>
        Then I should get the given result

    Examples: 
        | result    | num_1     | num_2     |
        | 40        | 20        | 20        |
        | 180       | 179       | 2         |