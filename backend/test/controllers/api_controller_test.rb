require "test_helper"

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get start" do
    get api_start_url
    assert_response :success
  end
end
