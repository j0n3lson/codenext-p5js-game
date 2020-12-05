# Sprites Directory

This folder contains sprites that can be used in your project. When adding new
sprites, there's a few rules to follow.

1. All file and older name should be lowercase.
1. All sprite animations should be stored in a folder called `${character_NN}`.

    ```
    minotaur_01
    ```

1. All png sequences for a sprite animation should be in the same folder. If
    there are multiple actions, the corresponding sequence is `${action_NNN}.png`.

    ```
    attacking_000.png
    attacking_001.png
    ...

    attacking_011.png
    ``` 

1. If an action has a sub-action such separate the sub action with at `_`. For example,
    suppose there are two sequences for the `idle` action, one for just plain idle and
    the other where the character is blinking:
    
    Basic idle images are named like:
    ```
    idle_000.png
    ...
    idle_009.png
    ```

    While idle with blinking would be named like:
    ```
    idle_blinking_000.png
    ...
    idle_blinking_009.png
    ```
