def count_and_convert_vowels(input_string):
    vowels = 'aeiou'
    vowel_count = 0
    converted_string = ''

    for char in input_string:
        if char.lower() in vowels:
            converted_string += char.upper()
            vowel_count += 1
        else:
            converted_string += char

    return vowel_count, converted_string

input_str = input("Enter string containing voewls: ")
count, converted = count_and_convert_vowels(input_str)
print("Output:", count, converted)
