(module
 (func $square(param i32) (result i32)
  local.get 0 
  local.get 0
  i32.mul 
 )
 (export "square" (func $square))
 (func $add(param i32) (param i32) (result i32)
  local.get 0 
  local.get 1
  i32.add
 )
 (export "add" (func $add))
 (func $subtract(param $larger i32) (param $smaller i32) (result i32)
  local.get $larger 
  local.get $smaller
  i32.sub
 )
 (export "subtract" (func $subtract))
)