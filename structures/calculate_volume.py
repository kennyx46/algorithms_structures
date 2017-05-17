ar = [2,5,1,2,3,4,7,7,6]

def calculate_volume(ar):
  left_max = 0
  right_max = 0
  left = 0
  right = len(ar) - 1
  volume_level = 0
  
  while left < right:
    if ar[left] > left_max:
      left_max = ar[left]
      
    if ar[right] > right_max:
      right_max = ar[right]
    
    if left_max >= right_max:
      volume_level += right_max - ar[right]
      right -= 1
    else:
      volume_level += left_max - ar[left]
      left += 1
    
  return volume_level
    
    
    
vl = calculate_volume(ar)
print(vl)
