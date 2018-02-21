#fizzbuzz
def fizzbuzz
    (1..100).each do |n|
        puts "#{n} ="
        if n % 3 == 0 && n % 15 == 0
            puts = 'fizzbuzz'
        elsif n % 3 == 0
            puts "fizz"
        elsif n % 5 == 0
            puts "buzz"
        else 
            puts ""
        end
    end
end

#bubble sort
@arr = [1, 2, 3, 4 ,57, 34, 12, 8,]
def bubble(arr)
    n array.length
    loop do
        swapped = false

    (n-1).times do |i|
        if array[i] > array[i+1]
            array[i], array[i + 1] = array[i +1], array[i] 
            swapped = true
    end
end

