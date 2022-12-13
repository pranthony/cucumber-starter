Feature: Two sum
    return indices of the two numbers such that they add up to target

    Scenario Outline: 
        Given an array of integers <nums>
        And an integer <target>
        When search to numbers such that they add up to target
        And return the indices of the numbers
        Then the result should be equal to <indices>     

    Examples:
        | nums | target | indices |
        | [3, 5, 8]  | 8  | [0, 1]  |
